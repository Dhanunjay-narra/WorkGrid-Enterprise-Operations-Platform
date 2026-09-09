export type IotAnomaliesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesMappingStateMachine {
  private allowedTransitions: Record<IotAnomaliesMappingState, IotAnomaliesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesMappingState, to: IotAnomaliesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesMappingState, to: IotAnomaliesMappingState): IotAnomaliesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
