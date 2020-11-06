require 'rails/generators'

module GithubLanguageStatistics
  module Generators
    class ViewsGenerator < Rails::Generators::Base
      source_root File.expand_path("../../../..", __FILE__)

      def copy_views
        directory 'app/views/git_language_bar', 'app/views/git_language_bar'
      end
    end
  end
end