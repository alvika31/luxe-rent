<?php

namespace App\Filament\Resources\Mobils\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class MobilForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nama')
                    ->required()
                    ->columnSpanFull(),
                RichEditor::make('deskripsi')
                    ->columnSpanFull(),
                Toggle::make('support_harian')
                    ->default(true)
                    ->required(),
                Toggle::make('support_mingguan')
                    ->default(true)
                    ->required(),
                Toggle::make('support_bulanan')
                    ->default(true)
                    ->required(),
                Toggle::make('is_active')
                    ->default(true)
                    ->required(),
                TextInput::make('harga')
                    ->label('Harga Mulai')
                    ->numeric()
                    ->default(true)
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->required()
                    ->disk('public')
                    ->directory('mobils')
                    ->visibility('public')
                    ->columnSpanFull(),
            ]);
    }
}
