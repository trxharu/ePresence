from django.shortcuts import render, redirect
from django.core.files.storage import default_storage
# Create your views here.
from db.dbclient import getDbInstance


def form(request):
    return render(request ,'form.html')

def userDetail(request):
    if request.method == 'POST':
        result ={}
        result.update(request.POST)

        education = {}
        workshop={}
        project ={}
        courses ={}
        job={}
        about ={}
        for i in result:
            if 'E_' in i:
                for j in range(len(result[i])):
                    if j not in education:
                        education[j] = { i : result[i][j] }
                    else:
                        education[j][i] =  result[i][j]
            elif 'P_' in i:
                for j in range(len(result[i])):
                    if j not in project:
                        project[j] = { i : result[i][j] }
                    else:
                        project[j][i] =  result[i][j]
            elif 'J_' in i:
                for j in range(len(result[i])):
                    if j not in job:
                        job[j] = { i : result[i][j] }
                    else:
                        job[j][i] =  result[i][j]
            elif 'W_' in i:
                for j in range(len(result[i])):
                    if j not in workshop:
                        workshop[j] = { i : result[i][j] }
                    else:
                        workshop[j][i] =  result[i][j]
            elif 'C_' in i:
                for j in range(len(result[i])):
                    if j not in courses:
                        courses[j] = { i : result[i][j] }
                    else:
                        courses[j][i] =  result[i][j]
            else:
                about[i] = result[i][0]

        fileE = request.FILES.getlist('E_Document')
        fileW = request.FILES.getlist('W_Document')
        fileC = request.FILES.getlist('C_Document')
        for i in fileE:
            filename = default_storage.save(i.name , i)
        for i in fileW:
            filename = default_storage.save(i.name , i)
        for i in fileC:
            filename = default_storage.save(i.name , i)
        education['E_Document'] = fileE
        workshop['W_Document'] = fileW
        courses['C_Document'] = fileC
        user = {'about':about , 'education':education , 'project':project , 'workshop':workshop , 'courses':courses ,'job':job}

        user_detail = getDbInstance().user_detail
        user_detail.insert_one(user)

        return render(request , 'userpage.html')
    else:
        return redirect('/DetailForm')


def displayData(request):
    #retrive the data from data base here
    #result store the data
    user_detail = getDbInstance().user_detail
    detail = user_detail.find_one({})
    return render(request ,'userpage.html', detail)

def media(request):
    if request.method == 'POST' :
        file = request.FILES['E_document']
        filename = default_storage.save(file.name , file)

        file = default_storage.open(filename)
        fileurl = default_storage.url(filename)
        return render(request, 'media.html',{'file':filename , 'fileurl':fileurl})

    else:
        return render(request, 'media.html')
