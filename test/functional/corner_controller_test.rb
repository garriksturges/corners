require 'test_helper'

class CornerControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get overview" do
    get :overview
    assert_response :success
  end

  test "should get members" do
    get :members
    assert_response :success
  end

end
