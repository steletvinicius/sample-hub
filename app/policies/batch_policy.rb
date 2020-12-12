class BatchPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

    def show?
      user.role == "Envio" || user.role == "Cadastro" || user.role == "Recepção" || user.admin?
    end

    def create?
      user.role == "Envio" || user.role == "Cadastro" || user.admin?
    end

    def update?
      user.role == "Envio" || user.role == "Cadastro" || user.admin?
    end
end
