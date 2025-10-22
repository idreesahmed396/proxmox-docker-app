# 🚀 Proxmox → Terraform → Docker → Node.js App

This project automates deploying a Node.js app (in Docker) on a VM created by Terraform in your Proxmox cluster.

---

## ⚙️ Prerequisites
- Proxmox VE with a cloud-init Ubuntu template
- Terraform installed
- SSH key setup on Proxmox template
- Docker Hub account (idreesahmed396)

---

## 🧩 Steps

### 1️⃣ Initialize Terraform
```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars and add your real pm_api_token_secret
terraform init
terraform apply -auto-approve
