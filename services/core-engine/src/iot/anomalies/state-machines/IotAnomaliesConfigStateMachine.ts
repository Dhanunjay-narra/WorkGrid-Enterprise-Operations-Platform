export type IotAnomaliesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesConfigStateMachine {
  private allowedTransitions: Record<IotAnomaliesConfigState, IotAnomaliesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesConfigState, to: IotAnomaliesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesConfigState, to: IotAnomaliesConfigState): IotAnomaliesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
