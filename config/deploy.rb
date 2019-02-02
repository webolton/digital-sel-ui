lock '~> 3.11.0'

set :application,     'digital-sel-ui'
set :repo_url,        'git@github.com:webolton/digital-sel-ui.git'
set :deploy_to,       '/var/www/digital-sel-ui'
set nvm_custom_path:  '/home/deploy'

append :linked_files, '.env'
append :linked_dirs,  'node_modules'

set :user,            'deploy'
set :ssh_options,     { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }

set :nvm_type,        :user
set :nvm_node,        'v10.13.0'
set :nvm_map_bins,    %w{node npm yarn}

set :default_env,     {'NODE_PATH' => 'src'}

set :yarn_flags,      %w{--silent --no-progress}

set :node_env, 'production'
set :yarn_target_path, -> { release_path.join('src') }
namespace :deploy do
  task :yarn_deploy do
    on roles fetch(:yarn_roles) do
      within fetch(:yarn_target_path, release_path) do
        execute fetch(:yarn_bin), 'build'
      end
    end
  end

  before 'symlink:release', :yarn_deploy
end
