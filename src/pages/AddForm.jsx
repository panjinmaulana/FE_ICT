import React from "react";

export default function AddForm() {
  return (
    <div>
      <h3 className="text-center mt-5">Add Form Product</h3>

      <div style={{ width: "50%", margin: "0 auto" }}>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Image URL
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Price
            </label>
            <input type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Stock
            </label>
            <input type="number" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
