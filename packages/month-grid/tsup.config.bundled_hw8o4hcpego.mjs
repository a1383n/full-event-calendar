// tsup.config.ts
import { defineConfig } from 'tsup'
import { sassPlugin } from 'esbuild-sass-plugin'
import * as preset from 'tsup-preset-solid'
var preset_options = {
  // array or single object
  entries: [
    {
      entry: 'src/index.ts'
    }
  ],
  // Set to `true` to remove all `console.*` calls and `debugger` statements in prod builds,
  drop_console: true,
  cjs: true,
  esbuild_plugins: [sassPlugin()]
}
var tsup_config_default = defineConfig((config) => {
  const watching = !!config.watch
  const parsed_data = preset.parsePresetOptions(preset_options, watching)
  if (!watching) {
    const package_fields = preset.generatePackageExports(parsed_data)
  }
  return preset.generateTsupOptions(parsed_data)
})
export { tsup_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2FtaXJraWFuYWRsL0Rlc2t0b3AvcHJvamVjdHMvY2FsZW5kYXItdmlldy9wYWNrYWdlcy9tb250aC1ncmlkL3RzdXAuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9hbWlya2lhbmFkbC9EZXNrdG9wL3Byb2plY3RzL2NhbGVuZGFyLXZpZXcvcGFja2FnZXMvbW9udGgtZ3JpZFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvYW1pcmtpYW5hZGwvRGVza3RvcC9wcm9qZWN0cy9jYWxlbmRhci12aWV3L3BhY2thZ2VzL21vbnRoLWdyaWQvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJ1xuaW1wb3J0IHsgc2Fzc1BsdWdpbiB9IGZyb20gJ2VzYnVpbGQtc2Fzcy1wbHVnaW4nXG5pbXBvcnQgKiBhcyBwcmVzZXQgZnJvbSAndHN1cC1wcmVzZXQtc29saWQnXG5cbmNvbnN0IHByZXNldF9vcHRpb25zOiBwcmVzZXQuUHJlc2V0T3B0aW9ucyA9IHtcbiAgLy8gYXJyYXkgb3Igc2luZ2xlIG9iamVjdFxuICBlbnRyaWVzOiBbXG4gICAge1xuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnXG4gICAgfVxuICBdLFxuXG4gIC8vIFNldCB0byBgdHJ1ZWAgdG8gcmVtb3ZlIGFsbCBgY29uc29sZS4qYCBjYWxscyBhbmQgYGRlYnVnZ2VyYCBzdGF0ZW1lbnRzIGluIHByb2QgYnVpbGRzLFxuICBkcm9wX2NvbnNvbGU6dHJ1ZSxcbiAgY2pzOiB0cnVlLFxuICBlc2J1aWxkX3BsdWdpbnM6IFtzYXNzUGx1Z2luKCldXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnKSA9PiB7XG4gIGNvbnN0IHdhdGNoaW5nID0gISFjb25maWcud2F0Y2hcblxuICBjb25zdCBwYXJzZWRfZGF0YSA9IHByZXNldC5wYXJzZVByZXNldE9wdGlvbnMocHJlc2V0X29wdGlvbnMsIHdhdGNoaW5nKVxuXG4gIGlmICghd2F0Y2hpbmcpIHtcbiAgICBjb25zdCBwYWNrYWdlX2ZpZWxkcyA9IHByZXNldC5nZW5lcmF0ZVBhY2thZ2VFeHBvcnRzKHBhcnNlZF9kYXRhKVxuXG4gICAgLy8gY29uc29sZS5sb2coYFxcbnBhY2thZ2UuanNvbjogXFxuJHtKU09OLnN0cmluZ2lmeShwYWNrYWdlX2ZpZWxkcywgbnVsbCwgMil9XFxuXFxuYClcblxuICAgIC8qXG4gICAgICAgICAgd2lsbCB1cGRhdGUgLi9wYSBja2FnZS5qc29uIHdpdGggdGhlIGNvcnJlY3QgZXhwb3J0IGZpZWxkc1xuICAgICAgKi9cbiAgICAvLyBwcmVzZXQud3JpdGVQYWNrYWdlSnNvbihwYWNrYWdlX2ZpZWxkcylcbiAgfVxuXG4gIHJldHVybiBwcmVzZXQuZ2VuZXJhdGVUc3VwT3B0aW9ucyhwYXJzZWRfZGF0YSlcbn0pXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4vLyAgIGZvcm1hdDogWydjanMnLCAnZXNtJ10sXG4vLyAgIC8vQHRzLWlnbm9yZVxuLy8gICBlc2J1aWxkUGx1Z2luczogW3Nhc3NQbHVnaW4oKV1cbi8vIH0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsb0JBQW9CO0FBQzFYLFNBQVMsa0JBQWtCO0FBQzNCLFlBQVksWUFBWTtBQUV4QixJQUFNLGlCQUF1QztBQUFBO0FBQUEsRUFFM0MsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxjQUFhO0FBQUEsRUFDYixLQUFLO0FBQUEsRUFDTCxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7QUFDaEM7QUFFQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxXQUFXO0FBQ3RDLFFBQU0sV0FBVyxDQUFDLENBQUMsT0FBTztBQUUxQixRQUFNLGNBQXFCLDBCQUFtQixnQkFBZ0IsUUFBUTtBQUV0RSxNQUFJLENBQUMsVUFBVTtBQUNiLFVBQU0saUJBQXdCLDhCQUF1QixXQUFXO0FBQUEsRUFRbEU7QUFFQSxTQUFjLDJCQUFvQixXQUFXO0FBQy9DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==