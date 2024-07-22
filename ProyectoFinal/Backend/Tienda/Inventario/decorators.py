from django.core.exceptions import PermissionDenied

def usuario_es_cliente(function):
    def wrap(request, *args, **kwargs):
        if request.user.groups.filter(name='Clientes').exists():
            return function(request, *args, **kwargs)
        else:
            raise PermissionDenied
    wrap.__doc__ = function.__doc__
    wrap.__name__ = function.__name__
    return wrap

def usuario_es_administrador(function):
    def wrap(request, *args, **kwargs):
        if request.user.groups.filter(name='Administradores').exists():
            return function(request, *args, **kwargs)
        else:
            raise PermissionDenied
    wrap.__doc__ = function.__doc__
    wrap.__name__ = function.__name__
    return wrap
