export type IotFirmwareRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareRuleStateMachine {
  private allowedTransitions: Record<IotFirmwareRuleState, IotFirmwareRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareRuleState, to: IotFirmwareRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareRuleState, to: IotFirmwareRuleState): IotFirmwareRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareRule: " + from + " -> " + to);
    }
    return to;
  }
}
