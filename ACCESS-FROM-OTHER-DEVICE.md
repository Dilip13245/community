# How to Access CommunityHub from Another Device

## 🚀 Quick Setup

### Step 1: Start the Development Server

```bash
npm run dev
```

The server will start and show you the local and network URLs.

### Step 2: Find Your IP Address

**On Linux/Mac:**
```bash
hostname -I
# or
ip addr show | grep "inet " | grep -v 127.0.0.1
```

**On Windows:**
```bash
ipconfig
# Look for IPv4 Address (not 127.0.0.1)
```

### Step 3: Access from Another Device

1. **Make sure both devices are on the same network** (same WiFi/router)

2. **On the other device**, open a browser and go to:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```
   
   Example: `http://192.168.1.100:5173`

3. **If port 5173 doesn't work**, check the terminal output - Vite will show the actual port.

---

## 📱 Access Methods

### Method 1: Same Network (WiFi)
- ✅ Easiest method
- ✅ Works on any device (phone, tablet, laptop)
- ✅ No internet required
- ❌ Both devices must be on same WiFi

### Method 2: Localhost (Same Computer)
- ✅ Fastest
- ❌ Only works on the same computer
- Use: `http://localhost:5173`

### Method 3: Production Build (Deploy)
- ✅ Accessible from anywhere
- ✅ Best for sharing
- Deploy to: Vercel, Netlify, or any hosting service

---

## 🔧 Troubleshooting

### Can't Access from Other Device?

1. **Check Firewall:**
   ```bash
   # Linux - Allow port 5173
   sudo ufw allow 5173
   
   # Or temporarily disable firewall for testing
   sudo ufw disable
   ```

2. **Check if Server is Running:**
   - Look for: `Local: http://localhost:5173/`
   - Look for: `Network: http://YOUR_IP:5173/`

3. **Try Different Port:**
   - Edit `vite.config.ts` and change `port: 5173` to `port: 3000`
   - Restart the server

4. **Check Network Connection:**
   - Both devices must be on same WiFi
   - Try pinging: `ping YOUR_IP_ADDRESS` from other device

---

## 🌐 Production Deployment

For permanent access from anywhere:

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop 'dist' folder to netlify.com
```

### Option 3: Build and Serve
```bash
npm run build
npm run preview -- --host 0.0.0.0
```

---

## 📝 Example

**On Your Computer:**
```bash
$ npm run dev

  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.100:5173/
```

**On Your Phone/Other Device:**
- Open browser
- Go to: `http://192.168.1.100:5173`
- ✅ Site loads!

---

## 🔒 Security Note

⚠️ **Development server is for testing only!**
- Don't use in production
- Not secure for public access
- Use proper hosting for real deployment

