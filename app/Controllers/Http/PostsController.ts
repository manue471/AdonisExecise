import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Noticia from 'App/Models/Noticia'

export default class PostsController {

    public async listagem({ view }: HttpContextContract) {
        const noticias = await Noticia.query().orderBy('id')
        return view.render('listagem',{
            noticias
        });
        
    }

    public async formulario({ view }: HttpContextContract) {
        return view.render('formulario');
    }
    public async cadastrar({ request, response }: HttpContextContract) {
        const noticia = new Noticia();
        
        
        noticia.titulo = request.input('titulo')
        noticia.chamada = request.input('chamada')
        noticia.conteudo = request.input('conteudo')
    
                         
        await noticia.save()
        
        response.redirect().toRoute('listagem')


}
}