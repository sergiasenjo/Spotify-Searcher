import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { SpotifyService } from './services/spotify.service';

import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent ],
  providers: [ appRoutingProviders, SpotifyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
