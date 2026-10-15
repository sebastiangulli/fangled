// Replaces Decap's plain-text preview with the real site, rendered live from the draft being edited.
// The site bundle (/admin/preview.js, built by `npm run build`) runs inside the preview iframe.
;(function () {
  var NAMES = ['home', 'about', 'marketing', 'global-trade', 'podcasts', 'contact', 'privacy', 'products', 'site', 'shared']

  function template(name) {
    return window.createClass({
      componentDidMount: function () { this.push() },
      componentDidUpdate: function () { this.push() },
      push: function () {
        if (!this.el) return
        var doc = this.el.ownerDocument
        var win = doc.defaultView
        var data = this.props.entry.getIn(['data']).toJS()
        win.__fangledPending = { name: name, data: data }
        if (win.__fangledPreview) return win.__fangledPreview.update(name, data)
        if (win.__fangledLoading) return
        win.__fangledLoading = true
        var base = window.location.origin + '/admin/'
        var link = doc.createElement('link')
        link.rel = 'stylesheet'
        link.href = base + 'preview.css'
        doc.head.appendChild(link)
        var script = doc.createElement('script')
        script.src = base + 'preview.js'
        script.onload = function () {
          var p = win.__fangledPending
          win.__fangledPreview.update(p.name, p.data)
        }
        doc.body.appendChild(script)
      },
      render: function () {
        var self = this
        return window.h('div', { ref: function (el) { self.el = el } })
      },
    })
  }

  NAMES.forEach(function (name) { CMS.registerPreviewTemplate(name, template(name)) })
})()
