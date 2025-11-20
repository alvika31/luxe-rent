<?php

namespace App\Filament\Resources\Configs\Pages;

use App\Filament\Resources\Configs\ConfigResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewConfig extends ViewRecord
{
    protected static string $resource = ConfigResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
