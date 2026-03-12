package com.alarmprototype.ui.bienvenida

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.alarmprototype.R
import com.alarmprototype.ui.crearcuenta.CrearCuentaActivity
import com.alarmprototype.ui.iniciarsesion.IniciarSesionActivity

/**
 * Pantalla de bienvenida.
 */
class BienvenidaActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_bienvenida)
        findViewById<com.google.android.material.button.MaterialButton>(R.id.btnCrearCuenta).setOnClickListener {
            startActivity(Intent(this, CrearCuentaActivity::class.java))
        }
        findViewById<com.google.android.material.button.MaterialButton>(R.id.btnIniciarSesion).setOnClickListener {
            startActivity(Intent(this, IniciarSesionActivity::class.java))
        }
    }
}
