module ApplicationHelper

  def date_mask(date)
    date.strftime("%d-%b-%Y")
  end

end
