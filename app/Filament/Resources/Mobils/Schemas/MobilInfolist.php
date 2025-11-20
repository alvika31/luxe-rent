<?php

namespace App\Filament\Resources\Mobils\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class MobilInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('nama'),
                ImageEntry::make('image')
                    ->visibility('public')
                    ->disk(
                        'public'
                    ),
                TextEntry::make('deskripsi')
                    ->columnSpanFull(),
                TextEntry::make('harga')
                    ->label('Harga Mulai'),
                IconEntry::make('support_harian')
                    ->boolean(),
                IconEntry::make('support_mingguan')
                    ->boolean(),
                IconEntry::make('support_bulanan')
                    ->boolean(),
                IconEntry::make('is_active')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
