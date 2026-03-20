# 🚀 Bitbucket Account Switcher

A lightweight Chrome extension that automatically redirects Bitbucket pull request links through Atlassian’s account selector — so you can choose the correct account before opening a PR.

---

## 🤔 Problem

If you use multiple Bitbucket accounts (e.g. work + personal), opening a PR link often results in:

> ❌ "Repository not found"

This happens because you're logged into the wrong account.

Manually switching accounts every time is annoying and breaks flow.

---

## ✅ Solution

This extension:

* Detects Bitbucket PR URLs
* Redirects you to Atlassian’s account selector
* Lets you pick the correct account
* Automatically returns you to the PR

✔ No manual logout
✔ No switching tabs
✔ No broken links

---

## ⚙️ How It Works

When you open a PR link like:

```
https://bitbucket.org/{workspace}/{repo}/pull-requests/{id}
```

It redirects to:

```
https://id.atlassian.com/login?prompt=select_account&continue=<PR_URL>
```

You select the account → you're redirected back to the PR.

---

## 🧩 Installation (Local)

1. Clone the repo:

```bash
git clone https://github.com/gaurishxjfk/bitbucket-account-switcher.git
```

2. Open Chrome and go to:

```
chrome://extensions/
```

3. Enable **Developer Mode**

4. Click **Load unpacked**

5. Select the project folder

---

## 🧪 Usage

1. Open any Bitbucket PR link
2. You’ll be redirected to account selector
3. Choose account
4. Done ✅

---

## 📁 Project Structure

```
bitbucket-account-switcher/
├── manifest.json
├── content.js
```

---

## ⚠️ Notes

* Only works on Bitbucket PR pages
* Uses official Atlassian account selection flow
* No data is collected or stored

---

## 💡 Future Improvements

* Auto-detect correct account based on workspace
* Toggle enable/disable extension
* Skip redirect if already logged into correct account

---

## 🧑‍💻 Author

**Gaurish Naik**
