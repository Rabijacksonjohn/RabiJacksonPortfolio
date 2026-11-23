# 🌐 Rabi Jackson J — Cloud & Networking Portfolio

> **"Architecting Scalable Cloud Systems on Rock-Solid Networking Foundations"**  
> Portfolio repository for **Rabi Jackson J** (MCA 2025, AWS Cloud Practitioner in-progress, Networking & Security enthusiast).

---

## 📌 Overview

This portfolio is specifically crafted to highlight the rare and high-demand intersection of **Deep Computer Networking Fundamentals** and **AWS Cloud Architecture**:

- **Core Specialization**: Computer Networking (TCP/IP, OSI model, CIDR Subnetting, Wireshark packet capture, Nmap scanning, DNS, DHCP, VPNs) seamlessly translated into **AWS Cloud Infrastructure** (AWS VPC, Public/Private Subnets, Internet Gateways, NAT Gateways, Route Tables, Stateful Security Groups, and Stateless NACLs).
- **Security & Automation Mindset**: Real hands-on experience building **SHIELD (Host Intrusion Detection System)** in Python, integrating **Google Gemini AI API** for threat classification and log triage, and training in **TryHackMe SOC Level 1** & **HackTheBox**.
- **Interactive Differentiators**:
  1. **AWS VPC Packet Route Simulator**: Step-by-step interactive simulator showing real AWS packet flows (Inbound Web, Bastion SSH jump, NAT Gateway outbound internet, and NACL malicious IP blocking).
  2. **Live CIDR & AWS Subnet Calculator**: Computes network boundaries, broadcast addresses, and details **AWS's 5 reserved IP addresses** per subnet (`.0`, `.1`, `.2`, `.3`, `.255`).
  3. **Interactive NOC & Cloud CLI Terminal**: A realistic terminal (`guest@rabi-cloud:~$`) supporting commands like `whoami`, `skills`, `aws vpc`, `traceroute`, `threat-scan`, `cat resume`, and `contact`.

---

## 🚀 Quick Start (Local Preview)

### Option 1: Direct File Open
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Python)
If you have Python installed, run in this directory:
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## ☁️ Project Deployment: Host on AWS (Showcases your Cloud Practitioner skills!)

Deploying your portfolio on AWS is a project in itself that you can discuss during interviews!

### Step 1: Create an Amazon S3 Bucket
1. Open the [AWS Management Console](https://console.aws.amazon.com/s3/).
2. Click **Create bucket**.
3. Choose a globally unique name (e.g., `rabi-jackson-portfolio`) and select your closest region (e.g., `ap-south-1` Mumbai or `us-east-1`).
4. Under **Object Ownership**, select **ACLs disabled (recommended)**.
5. Uncheck **Block all public access** and acknowledge the warning.
6. Click **Create bucket**.

### Step 2: Enable Static Website Hosting
1. Go to your bucket -> **Properties** tab.
2. Scroll to the bottom to **Static website hosting** -> Click **Edit**.
3. Select **Enable**.
4. Set **Index document** to `index.html`.
5. Set **Error document** to `index.html`.
6. Click **Save changes**.

### Step 3: Set S3 Bucket Policy (Public Read)
1. Go to your bucket -> **Permissions** tab.
2. Under **Bucket Policy**, click **Edit** and paste:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rabi-jackson-portfolio/*"
    }
  ]
}
```
*(Replace `rabi-jackson-portfolio` with your actual bucket name)*.
3. Click **Save changes**.

### Step 4: Upload Portfolio Files
Upload `index.html`, `styles.css`, `script.js`, and your resume PDF into the root of the bucket:
```bash
# Or via AWS CLI:
aws s3 sync . s3://rabi-jackson-portfolio/ --exclude "*.git*" --exclude "README.md"
```

### Step 5: (Optional & Recommended) Add AWS CloudFront CDN for Free SSL (HTTPS)
1. Go to **AWS CloudFront** -> **Create distribution**.
2. Select your S3 bucket endpoint as the Origin Domain.
3. Under **Viewer Protocol Policy**, select **Redirect HTTP to HTTPS**.
4. Click **Create distribution**.
5. Once deployed, CloudFront provides a fast, globally cached `https://d123456abcdef8.cloudfront.net` URL with a free SSL certificate!

---

## 🐙 Alternative: Free Deployment on GitHub Pages

1. Create a GitHub repository named `Rabijacksonjohn.github.io` (or `cloud-portfolio`).
2. Push this folder to the repository:
```bash
git init
git add .
git commit -m "Initial commit: Rabi Jackson Cloud & Networking Portfolio"
git branch -M main
git remote add origin https://github.com/Rabijacksonjohn/cloud-portfolio.git
git push -u origin main
```
3. Go to repository **Settings** -> **Pages** -> Select branch `main` and root `/` -> Click **Save**.
4. Your website is instantly live at: `https://Rabijacksonjohn.github.io/cloud-portfolio`

---

## 📁 File Structure

```
cloud-networking-portfolio/
├── index.html        # Main semantic single-page web app
├── styles.css        # Custom responsive styling (AWS dark & cyber theme)
├── script.js         # Interactive VPC simulator, CIDR calculator, NOC terminal
└── README.md         # Deployment & documentation guide
```

---

## 📬 Contact Information
- **Full Name**: Rabi Jackson J
- **Email**: [rabijacksonjohn@email.com](mailto:rabijacksonjohn@email.com)
- **Phone**: +91-9787932750
- **Location**: Thanjavur, Tamil Nadu, India (Available for Immediate Joining)
- **LinkedIn**: [linkedin.com/in/rabi-jackson-j](https://www.linkedin.com/in/rabi-jackson-j/)
- **GitHub**: [github.com/Rabijacksonjohn](https://github.com/Rabijacksonjohn)
