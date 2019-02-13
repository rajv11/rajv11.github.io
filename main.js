$(document).ready(function () {
    $('.semester').on('change', function () {
        let semesters = $(this).val()
        let html = ''
        for(i=0; i < semesters; i++) {
            html += `
            <div class="form-group">
                <label for="">Semster ${i+1} GPA</label>
                <input type="text"
                class="form-control semester_${i+1}" name="semester_${i+1}" id="semester" aria-describedby="helpId" placeholder="Enter GPA for semester ${i+1}">
            </div>`
        }

        $('#semesters').val(semesters)
        html += '<button onclick="calculateGPA()" class="btn btn-primary">Calculate GPA</button>'
        $('#generatedHtml').html(html)
    })
})

function calculateGPA() {
    let semesters = $('#semesters').val()
    let totalGpa = 0
    for(i=0; i < semesters; i++) {
        if (parseGpa(parseFloat($(`.semester_${i+1}`).val()))) {
            totalGpa +=  parseGpa(parseFloat($(`.semester_${i+1}`).val()))
        }
        else {
            return
        }
        
    }
    
    let text = ''
    let finalGPA = calculateFinalGPA(totalGpa, semesters)
    if (finalGPA >= 3.3) {
        text = "You earn scholarship"
    }
    else {
        text = "You need minimum of 3.3 GPA to earn scholarship"
    }

    $('.output').html(`Your Total GPA average for <span class="no-of-semesters">${semesters}</span> semesters is <span class="calculated-gpa">${finalGPA}</span>
                        <h1 class="scholarship">${text}</h1>
                    `)
}

function calculateFinalGPA (totalGpa, semesters) {
    return Math.round((totalGpa/semesters) * 100) / 100 
}
function parseGpa (gpa, test) {
    if (gpa === '')
    {
        throw Error("GPA cannot be empty")
    }
    if (gpa === null ) {
        throw Error("GPA cannot be null")
    }
    if (!(gpa >= 0 && gpa <= 4)) {
        if(test) {
            throw Error("GPA should be between 0 and 4")
        }
        else {
            alert(`GPA should be between 0 and 4 for semester ${i+1}`)
            return false
        }
    }
    else {
        return gpa
    }
}
