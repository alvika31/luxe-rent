<?php

namespace App\Filament\Resources\Configs\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ConfigForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('phone_number')
                    ->tel()
                    ->required(),
                TextInput::make('whatsapp')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->default(null),
                TextInput::make('instagram')
                    ->required(),
                TextInput::make('facebook')
                    ->required(),
            ]);
    }
}
