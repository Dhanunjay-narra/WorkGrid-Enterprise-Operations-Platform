export type IotCommandsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsRuleStateMachine {
  private allowedTransitions: Record<IotCommandsRuleState, IotCommandsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsRuleState, to: IotCommandsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsRuleState, to: IotCommandsRuleState): IotCommandsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsRule: " + from + " -> " + to);
    }
    return to;
  }
}
