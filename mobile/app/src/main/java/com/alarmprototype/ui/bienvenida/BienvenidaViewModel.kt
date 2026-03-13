package com.alarmprototype.ui.bienvenida

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * ViewModel para la pantalla de bienvenida.
 * Placeholder para implementación futura.
 */
class BienvenidaViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(BienvenidaUiState())
    val uiState: StateFlow<BienvenidaUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            // Lógica inicial si es necesaria
        }
    }
}
