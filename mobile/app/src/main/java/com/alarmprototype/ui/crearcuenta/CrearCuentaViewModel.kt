package com.alarmprototype.ui.crearcuenta

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * ViewModel para la pantalla de crear cuenta.
 * Placeholder para implementación futura.
 */
class CrearCuentaViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(CrearCuentaUiState())
    val uiState: StateFlow<CrearCuentaUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            // Lógica inicial si es necesaria
        }
    }
}
