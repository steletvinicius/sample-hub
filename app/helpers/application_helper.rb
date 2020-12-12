module ApplicationHelper

  # returns a date as string formatted to dd-mm-yyyy (31-12-2020)
  def date_mask(date)
    date.strftime("%d/%m/%Y") unless date.nil?
  end

  # customizes title of each view
  def full_title(page_title = '')
    base_title = 'Sample Hub'
    page_title.empty? ? base_title : "#{base_title} | #{page_title}"
  end

end
