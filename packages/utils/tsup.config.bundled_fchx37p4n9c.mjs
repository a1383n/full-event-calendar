// tsup.config.ts
import { defineConfig } from 'tsup'
import * as preset from 'tsup-preset-solid'
var preset_options = {
  // array or single object
  entries: [
    {
      entry: 'src/index.ts'
    }
  ],
  // Set to `true` to remove all `console.*` calls and `debugger` statements in prod builds
  drop_console: false,
  cjs: true
}
var tsup_config_default = defineConfig((config) => {
  const watching = !!config.watch
  const parsed_data = preset.parsePresetOptions(preset_options, watching)
  return preset.generateTsupOptions(parsed_data)
})
export { tsup_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2FtaXJraWFuYWRsL0Rlc2t0b3AvcHJvamVjdHMvY2FsZW5kYXItdmlldy9wYWNrYWdlcy91dGlscy90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvYW1pcmtpYW5hZGwvRGVza3RvcC9wcm9qZWN0cy9jYWxlbmRhci12aWV3L3BhY2thZ2VzL3V0aWxzXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9hbWlya2lhbmFkbC9EZXNrdG9wL3Byb2plY3RzL2NhbGVuZGFyLXZpZXcvcGFja2FnZXMvdXRpbHMvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJ1xuaW1wb3J0ICogYXMgcHJlc2V0IGZyb20gJ3RzdXAtcHJlc2V0LXNvbGlkJ1xuXG5jb25zdCBwcmVzZXRfb3B0aW9uczogcHJlc2V0LlByZXNldE9wdGlvbnMgPSB7XG4gIC8vIGFycmF5IG9yIHNpbmdsZSBvYmplY3RcbiAgZW50cmllczogW1xuICAgIHtcbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJ1xuICAgIH1cbiAgXSxcbiAgLy8gU2V0IHRvIGB0cnVlYCB0byByZW1vdmUgYWxsIGBjb25zb2xlLipgIGNhbGxzIGFuZCBgZGVidWdnZXJgIHN0YXRlbWVudHMgaW4gcHJvZCBidWlsZHNcbiAgZHJvcF9jb25zb2xlOiBmYWxzZSxcbiAgY2pzOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnKSA9PiB7XG4gIGNvbnN0IHdhdGNoaW5nID0gISFjb25maWcud2F0Y2hcblxuICBjb25zdCBwYXJzZWRfZGF0YSA9IHByZXNldC5wYXJzZVByZXNldE9wdGlvbnMocHJlc2V0X29wdGlvbnMsIHdhdGNoaW5nKVxuXG4gIC8vIGNvbnN0IHNzc3MgPSBwcmVzZXQuZ2VuZXJhdGVUc3VwT3B0aW9ucyhwYXJzZWRfZGF0YSlbMF1cbiAgLy8gc3Nzc1snZHRzJ10gPSB7XG4gIC8vICAgYmFubmVyOiBcInNkYXNkYXNkXCJcbiAgLy8gfVxuICAvLyBjb25zb2xlLmxvZyhbc3Nzc10pXG4gIHJldHVybiBwcmVzZXQuZ2VuZXJhdGVUc3VwT3B0aW9ucyhwYXJzZWRfZGF0YSlcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLFNBQVMsb0JBQW9CO0FBQzNXLFlBQVksWUFBWTtBQUV4QixJQUFNLGlCQUF1QztBQUFBO0FBQUEsRUFFM0MsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsRUFDZCxLQUFLO0FBQ1A7QUFFQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxXQUFXO0FBQ3RDLFFBQU0sV0FBVyxDQUFDLENBQUMsT0FBTztBQUUxQixRQUFNLGNBQXFCLDBCQUFtQixnQkFBZ0IsUUFBUTtBQU90RSxTQUFjLDJCQUFvQixXQUFXO0FBQy9DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
