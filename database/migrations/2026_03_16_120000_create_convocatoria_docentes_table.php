<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('convocatoria_docentes', function (Blueprint $table) {
            $table->id();
            $table->string('nombres');
            $table->string('tipo_documento', 5);
            $table->string('cedula', 50);
            $table->string('expedida');
            $table->string('cargo');
            $table->string('area');
            $table->string('sede');
            $table->string('tiempo_servicio');
            $table->string('email');
            $table->string('telefono');
            $table->text('propuesta');
            $table->string('declaracion_nombre');
            $table->string('declaracion_documento');
            $table->json('observaciones')->nullable();
            $table->text('observaciones_texto')->nullable();
            $table->string('estado')->nullable();
            $table->timestamp('revisado_at')->nullable();
            $table->string('revisado_por')->nullable();
            $table->string('anexo_cedula');
            $table->string('anexo_certificado_docente');
            $table->string('anexo_judiciales');
            $table->string('anexo_fiscales');
            $table->string('anexo_disciplinarios');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('convocatoria_docentes');
    }
};
