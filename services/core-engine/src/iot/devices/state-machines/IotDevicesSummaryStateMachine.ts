export type IotDevicesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesSummaryStateMachine {
  private allowedTransitions: Record<IotDevicesSummaryState, IotDevicesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesSummaryState, to: IotDevicesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesSummaryState, to: IotDevicesSummaryState): IotDevicesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
