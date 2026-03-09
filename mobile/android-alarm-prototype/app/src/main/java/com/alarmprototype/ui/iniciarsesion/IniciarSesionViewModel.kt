package com.alarmprototype.ui.iniciarsesion

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * ViewModel para la pantalla de iniciar sesión.
 * Placeholder para implementación futura.
 */
class IniciarSesionViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(IniciarSesionUiState())
    val uiState: StateFlow<IniciarSesionUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            // Lógica inicial si es necesaria
        }
    }
}
