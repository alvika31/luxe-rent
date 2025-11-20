<?php

namespace App\Filament\Resources\Mobils\Pages;

use App\Filament\Resources\Mobils\MobilResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewMobil extends ViewRecord
{
    protected static string $resource = MobilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
