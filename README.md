# 📡 College Network Design using Cisco Packet Tracer

## 📘 Project Overview
This project simulates a complete **college campus network** using **Cisco Packet Tracer**, showcasing the use of:
- Local Area Network (LAN)
- Virtual LAN (VLAN)
- Routing Information Protocol (RIP)
- Proper IP Addressing
- Layered college architecture (Admin, Students, Labs, Hostels, etc.)

The goal is to **design an efficient, segmented, and scalable network** with improved traffic control, security, and performance.

---

## 🧩 Key Concepts Used

### 🔹 LAN (Local Area Network)
- Connects devices within each department or building (e.g., classrooms, staff rooms).
- Enables high-speed communication and resource sharing within localized areas.

### 🔹 VLAN (Virtual Local Area Network)
- Logically segments the network without needing separate hardware.
- VLANs used:
  - VLAN 10 – Students
  - VLAN 20 – Faculty
  - VLAN 30 – Admin
  - VLAN 40 – Labs
- Improves security, reduces broadcast domain size.

### 🔹 RIP (Routing Information Protocol)
- A **distance-vector routing protocol** used to allow routers to share routing information automatically.
- Ensures communication between separate subnets (e.g., Admin ↔ Hostel).

### 🔹 IP Addressing
- Each VLAN is assigned a separate **IP subnet**:
  - VLAN 10: `192.168.10.0/24`
  - VLAN 20: `192.168.20.0/24`
  - VLAN 30: `192.168.30.0/24`
  - VLAN 40: `192.168.40.0/24`
- Subnetting allows easier traffic management and future scalability.

---

## 🛠️ Tools & Software
- **Cisco Packet Tracer** (version 8.x recommended)
- Windows/Linux/Mac
