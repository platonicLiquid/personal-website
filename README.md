# About

This is a website I made to show off my CV and to learn react. Feel free to use
this as a base for your own website if you want.

matthew.yocum.dev was made using
<a href="https://vitejs.dev" target="_blank">Vite</a>,
<a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>, and
<a href="https://mdxjs.com" target="_blank">MDXJS.</a>

# Deploying the website

I use cloudflare pages to build and deploy the website automagically whenever
`main` is updated. This took quite a bit of niggling to get it to function
correctly as the insturctions on both Cloudflare's and Vite's website were
inadequate.

Here are some troubleshooting pointers to help you on your way:

- If your root directory for your repo is not the same as the root directory for
  your website, you will run into problems. Under "Build Configurations" set the
  root directory to your website folder. In this case it would be `/my-website`.
- You need to include a `/dist` folder in your repo using the Vite's default
  build settings. Otherwise this will cause build failures on Cloudflare's end.
  I'm a noob and ran into trouble getting GitHub to synce an empty directory so
  I just created and empty `nothing.md` file in `/my-website/dist/` to force the
  creation of the directory. There's probably a better way to do this, however.
- Do not use the Vite press framework. Framework needs to be set to "None".
  Instead just use `npm run build` in "Build command".
- Fix your typescript erorrs even if everything works locally. Otherwise
  Cloudflare gets angry and doesn't build your site.
