package com.alarmprototype.ui.crearcuenta

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.alarmprototype.R
import com.alarmprototype.ui.iniciarsesion.IniciarSesionActivity

/**
 * Pantalla de creación de cuenta.
 */
class CrearCuentaActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_crear_cuenta)
        findViewById<android.widget.ImageButton>(R.id.btnVolver).setOnClickListener {
            finish()
        }
        findViewById<com.google.android.material.button.MaterialButton>(R.id.btnCrearCuenta).setOnClickListener {
            startActivity(Intent(this, IniciarSesionActivity::class.java))
        }
    }
}
