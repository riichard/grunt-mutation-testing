/**
 * This command removes unary expressions.
 *
 * e.g. -42 becomes 42, -true becomes true, !false becomes false, ~123 becomes 123.
 *
 * Created by Merlin Weemaes on 2/19/15.
 */
var _ = require('lodash');
var Utils = require('../utils/MutationUtils');
var MutateBaseCommand = require('../mutationCommands/MutateBaseCommand');
function UnaryExpressionCommand(src, astNode, callback, parentMutationId) {
    MutateBaseCommand.call(this, src, astNode, callback, parentMutationId);
}

UnaryExpressionCommand.prototype.execute = function () {

    if (this._astNode.operator) {
        this._callback(Utils.createUnaryOperatorMutation(this._astNode, this._parentMutationId, ""));
    }

    return [];
};

module.exports = UnaryExpressionCommand;
