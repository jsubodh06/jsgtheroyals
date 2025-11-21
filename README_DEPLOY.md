# Deployment help — GitHub Pages (Vite + React)

This project has helper files added to make deploying to GitHub Pages easy.

What I added:
- `public/404.html` — SPA fallback for client-side routing.
- `public/CNAME` — template; replace `yourdomain.com` with your custom domain if desired.
- `.github/workflows/deploy.yml` — GitHub Actions workflow to build and publish `dist/` to `gh-pages`.
- Small comment inserted into `vite.config.ts` explaining `base` usage for GitHub Pages.

Quick steps to deploy:

1. Open `vite.config.ts` and set `base` if you plan to serve the site under a repo path:
   - For repo pages (https://<user>.github.io/<repo>/): set `base: '/<repo>/'`
   - For user pages (https://<user>.github.io/): set `base: '/'`

2. Commit & push all changes to `main`:
   ```
   git add .
   git commit -m "Add GitHub Pages deploy helpers"
   git push origin main
   ```

3. Ensure Actions workflow permissions allow pushing:
   - Repo -> Settings -> Actions -> General -> Workflow permissions -> **Read and write permissions**
   - Or use a Personal Access Token (PAT) named `GH_PAGES_PAT` (see below).

4. (Optional) If you cannot enable Actions write permission:
   - Create a PAT with `public_repo` (or `repo`) scope.
   - Add it to Repo Settings -> Secrets -> Actions -> `GH_PAGES_PAT`.
   - Edit `.github/workflows/deploy.yml` to uncomment and use `GH_PAGES_PAT` as `github_token`.

5. Trigger workflow by committing any change. Then watch Actions -> workflow run.

6. After successful run, go to Settings -> Pages and confirm `gh-pages` is selected as source.

DNS for custom domain (GoDaddy):
- Add A records for root/apex pointing to:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
- Add a CNAME for `www` pointing to `<your-username>.github.io`

Troubleshooting:
- If `npm ci` fails, try switching to `npm install` in workflow.
- If build fails, check Actions logs for the Build step and paste errors for help.
