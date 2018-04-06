import {Routes , Router, RouterModule} from '@angular/router';
import {CurrentComponent} from './current/current.component';
import {ForecastComponent} from './forecast/forecast.component';
import { ModuleWithProviders } from '@angular/core';

const WEATHER_ROUTER : Routes = [
    {path : '' , component : CurrentComponent},
    {path : 'forecast' , component : ForecastComponent}
]

export const weatherRouting : ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);

