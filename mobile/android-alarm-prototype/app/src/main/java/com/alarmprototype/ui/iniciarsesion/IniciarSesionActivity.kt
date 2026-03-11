package com.alarmprototype.ui.iniciarsesion

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.alarmprototype.R

/**
 * Pantalla de iniciar sesión.
 */
class IniciarSesionActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_iniciar_sesion)
        findViewById<android.widget.ImageButton>(R.id.btnVolverSignIn).setOnClickListener {
            finish()
        }
    }
}
