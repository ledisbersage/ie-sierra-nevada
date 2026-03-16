<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ConvocatoriaDocente extends Model
{
    protected $table = 'convocatoria_docentes';

    protected $fillable = [
        'nombres',
        'tipo_documento',
        'cedula',
        'expedida',
        'cargo',
        'area',
        'sede',
        'tiempo_servicio',
        'email',
        'telefono',
        'propuesta',
        'declaracion_nombre',
        'declaracion_documento',
        'observaciones',
        'observaciones_texto',
        'estado',
        'revisado_at',
        'revisado_por',
        'anexo_cedula',
        'anexo_certificado_docente',
        'anexo_judiciales',
        'anexo_fiscales',
        'anexo_disciplinarios',
    ];

    protected $casts = [
        'observaciones' => 'array',
        'revisado_at' => 'datetime',
    ];
}
