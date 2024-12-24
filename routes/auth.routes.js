const { adminRegister, adminLogin, adminLogout, employeeRegister, employeeLogin, employeeLogout } = require("../controllers/auth.controller")
const { adminProtected } = require("../middleware/protected.middleware")

const router = require("express").Router()

router
    .post("/admin/register", adminRegister)
    .post("/admin/login", adminLogin )
    .post("/admin/logout", adminLogout  )


    .post("/customer/register", adminProtected, employeeRegister )
    .post("/customer/login", employeeLogin )
    .post("/customer/logout", employeeLogout )

    module.exports = router