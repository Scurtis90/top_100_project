class SongsController < ApplicationController
  before_action :set_artist
  before_action :set_song, only: [ :show, :edit, :update, :destroy ]

  def index
    @songs = @artist.songs.all
    render component: 'Songs', props: { songs: @songs, artist: @artist }
  end

def show
  @song = Song.find(params[:id])
  render component: 'Song', props: { artist: @artist, song: @song }
end

 def new
  @song = Song.new
  render component: 'SongNew', props: { song: @song, artist: @artist }
  end
  
def create
  @song = @artist.songs.new(song_params)
  if @song.save
    redirect_to billboard_artist_path(@artist.billboard_id, @artist)
  else
    render component: 'SongNew', props: { song: @song, artist: @artist }
  end
end

def edit
  @song = Song.find(params[:id])
  render component: 'SongEdit', props: { artist: @artist, song: @song }
end

 def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      redirect_to artist_songs_path(@artist)
    else
      render component: 'SongEdit', props: { artist: @artist, song: @song }
    end
  end

def destroy
  @song = Song.find(params[:id])
  @song.destroy
  redirect_to billboard_artist_path(@artist.billboard_id, @artist)
end

private
def song_params
  params.require(:song).permit(:title, :album, :genre)
end

def set_artist
  @artist = Artist.find(params[:artist_id])
end

def set_song
  @song = @artist.songs.find(params[:id])
end
end