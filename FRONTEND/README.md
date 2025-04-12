# User Management System.

## 1. Introduction:.
A full-stack user management system built with Node.js, MySQL, and Angular 17. This system allows users to register, verify their email, and log in securely. Admins can manage users, while developers can simulate data using a fake backend for frontend development. The project implements secure JWT authentication, role-based access, and essential account recovery features..

## 2. Installation Instructions.:
### Clone the repository.

# git clone https://github.com/JohnCliford02/user-management-system.git
# cd user-managament-system

### Install Dependencies.

# npm install
# npm install bootstrap
# npm install -g @angular/cli

## Create initial starter app

# ng new user-management-system

## Run Angular app

# ng serve

# 3. Usage:
- Email Sign-Up & Verification.

# Navigate to http://localhost:4200/accounts/register
# Fill out the form to create an account.
# An email with a verification link will be sent.
# Click the link to activate your account.
# Proceed to log in via http://localhost:4000/accounts/login

## Other Features (Team Collaboration)
# Profile Management: /profile
# Admin Dashboard: /admin
# Role-based access redirects based on user roles.
# Password reset and recovery available via /accounts/reset-password

### 4. Testing: 
# Functional Testing
# Verified registration, email confirmation, and login processes.
# Security Testing
# Input validation, CSRF protection, and token verification tested.

# 5. Contributing:
# Implement the sign-up, verification, and login components in the # # Angular boilerplate.

# Create a new branch for the feature
# git checkout -b MADULA-frontend-profile-admin-fake-backend
# git checkout -b Gijan-frontend-signup-auth

# Make changes, then stage them

# git add . 

# Commit changes often with  messages

# git commit -m "Implement email sign-up, verification, and authentication"
# git commit -m "Implement profile management, admin dashboard, and fake backend"

# Push branch and submit a Pull Request

# git push origin Gijan-frontend-signup-auth
# git push origin MADULA-frontend-profile-admin-fake-backend

# 6. License
# MIT License
