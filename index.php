<!DOCTYPE html>
<html lang="en">
<?php require_once('_head.php') ?>
<body class="container">
    <h1 style="text-align: center">CEFIM</h1>
    <form id="formAjoutApprenant">
        <fieldset>
            <legend style="padding: 10px 0; font-size: 20px">
                <h2>Ajout apprenant</h2>
            </legend>
            <div id="ajoutApprenant">
                <div class="form-outline">
                    <label class="form-label" for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" class="form-control" />
                    <div class="error" id="nomErr"></div>
                </div>
                <div class="form-outline">
                    <label class="form-label" for="prenom">Prénom</label>
                    <input type="text" id="prenom" name="prenom" class="form-control" />
                    <div class="error" id="prenomErr"></div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Ajouter un apprenant
                </button>
            </div>
        </fieldset>
    </form>
    
    <div id="templateListApprenants" class="mt-4">
        <h2>Liste des apprenants</h2>
        <div id="listApprenants">
            <table class="tableListApprenants mt-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                    </tr>
                </thead>
                <tbody id="test"></tbody>
            </table>
        </div>
        <form id="formFormerGroupes">
            <h2 class="mt-5">Nombre de groupes</h2>
            <div id="formerGroupes" class="mt-2">
                <div class="form-outline">
                    <input type="number" id="nbGroupes" name="nbGroupes" class="form-control" />
                    <div class="error" id="nombreGroupesErr"></div>
                </div>
                <button type="submit" class="btn btn-primary" >
                    Former les groupes
                </button>
            </div>
        </form>
    </div>
    <h2 class="mt-4">Compositions des groupes</h2>
    <div id="listeGroupes">

    </div>

    <?php require_once('_footer.php') ?>
</body>

</html>