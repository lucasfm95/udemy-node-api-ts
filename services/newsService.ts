import NewsRepository from "../repository/newsRepository";
import newsRepository from "../repository/newsRepository";

class NewsService{
    get(){
        return NewsRepository.find({});
    }

    getById(_id){
        return NewsRepository.findById(_id);
    }

    create(news){
        return newsRepository.create(news);
    }

    update(_id, news){
        return newsRepository.findByIdAndUpdate(_id, news);
    }

    delete(_id){
        return newsRepository.findByIdAndRemove(_id);
    }
}

export default new NewsService();