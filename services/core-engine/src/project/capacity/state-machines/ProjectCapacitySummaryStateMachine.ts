export type ProjectCapacitySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacitySummaryStateMachine {
  private allowedTransitions: Record<ProjectCapacitySummaryState, ProjectCapacitySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacitySummaryState, to: ProjectCapacitySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacitySummaryState, to: ProjectCapacitySummaryState): ProjectCapacitySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacitySummary: " + from + " -> " + to);
    }
    return to;
  }
}
