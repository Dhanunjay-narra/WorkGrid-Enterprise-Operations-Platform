export type IotAnomaliesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesStateStateMachine {
  private allowedTransitions: Record<IotAnomaliesStateState, IotAnomaliesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesStateState, to: IotAnomaliesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesStateState, to: IotAnomaliesStateState): IotAnomaliesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesState: " + from + " -> " + to);
    }
    return to;
  }
}
