class Api::CardsController < ApplicationController
  # before_action :authenticate_user!

  def index
    render json: Card.all
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else
      render json: { errors: card.errors}
    end
  end

  def update
    card = Card.find(params[:id])
    if card.update(card_params)
      render json: card
    else 
      render json: { errors: card.errors}
    end
  end

  def destroy
    Card.find(params[:id]).destroy
    render json: { message: 'Card Deleted' }
  end

  private 

  def card_params
    params.require(:card).permit(:question, :answer, :is_correct)
  end 

end
