# User Management System.

## 1. Introduction:.
A full-stack user management system built with Node.js, MySQL, and Angular 17. This system allows users to register, verify their email, and log in securely. Admins can manage users, while developers can simulate data using a fake backend for frontend development. The project implements secure JWT authentication, role-based access, and essential account recovery features..

## 2. Installation Instructions.:
## Clone the repository.

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

# Go to registration page http://localhost:4200/account/register
# Fill out the Form.
# A verification link will be automatically appear after registering.
# Click the link to authenticate the account.
# Log in via http://localhost:4200/account/login

## Other Features
# Profile: http://localhost:4200/profile
# Admin Dashboard: http://localhost:4200/admin
# Forgot password: http://localhost:4200/account/forgot-password

### 4. Testing: 
# Functional Testing
# Valid user credentials allow login, invalid password error, empty fields trigger validation, redirect to dashboard after login and email confirmation.
# Security Testing
# Input validation, CSRF protection in place (token check), and token verification tested.

# 5. Contributing:
## Implement the sign-up, verification, and login components in the # # Angular boilerplate.

# Create a new branch for the feature
# git checkout -b branch-Jlaki
# git checkout -b branch-Adolfo
# git checkout -b branch-mahinay
# git checkout -b branch-tanglao    

# Make changes and then stage them:

# git add . 

# Commit changes often with  messages

# git commit -m "Implement email sign-up, verification, and authentication"
# git commit -m "Implement profile management, admin dashboard, and fake backend"

# Push branch and submit a Pull Request

# git push origin Gijan-frontend-signup-auth
# git push origin MADULA-frontend-profile-admin-fake-backend

# 6. License
# MIT License
