module ApplicationHelper

  # returns a date as string formatted to dd-mm-yyyy (31-12-2020)
  def date_mask(date)
    date.strftime("%d/%m/%Y") unless date.nil?
  end

  # creates functions to check the User role for Pundit Policies and for views/controllers
  def sender?(user)
    user.role == "Envio" || user.role == "Cadastro"
  end
  def receiver?
    user.role == "Recepção"
  end

  # customizes title of each view
  def full_title(page_title = '')
    base_title = 'Sample Hub'
    page_title.empty? ? base_title : "#{base_title} | #{page_title}"
  end

end
