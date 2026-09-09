export type IotAnomaliesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesEventStateMachine {
  private allowedTransitions: Record<IotAnomaliesEventState, IotAnomaliesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesEventState, to: IotAnomaliesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesEventState, to: IotAnomaliesEventState): IotAnomaliesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
